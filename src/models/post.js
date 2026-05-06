// src/models/Post.js
const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [3, 'Title must be at least 3 characters'],
        maxlength: [200, 'Title cannot exceed 200 characters']
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        minlength: [10, 'Content must be at least 10 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    likes: {
        type: Number,
        default: 0
    },
    tags: [{
        type: String,
        trim: true
    }],
    published: {
        type: Boolean,
        default: true
    },

    // ✅ ADD THIS (relationship with comments)
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]

}, {
    timestamps: true
});

// ✅ Add text index for search
postSchema.index({ title: 'text', content: 'text' });

// ✅ Virtual populate (better way to get comments)
postSchema.virtual('commentList', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'post'
});

// ✅ Enable virtuals in JSON
postSchema.set('toJSON', { virtuals: true });

// ✅ Instance method
postSchema.methods.like = function() {
    this.likes++;
    return this.save();
};

// ✅ Static method
postSchema.statics.findByAuthor = function(author) {
    return this.find({ author: new RegExp(author, 'i') });
};

module.exports = mongoose.model('Post', postSchema);

