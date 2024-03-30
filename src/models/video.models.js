const mongoose = require("mongoose")
const mongoose_aggregate_paginate = require("mongoose-aggregate-paginate-v2")
const ObjectId = mongoose.Schema.Types.ObjectId
const video_schema = new mongoose.Schema({
    video_file: {
        type: String, //cloudynary url
        required: true
    },
    thumbnail: {
        type: String, //cloudynary url
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: True
    },
    duration: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    is_published: {
        type: Boolean,
        default: true
    },
    owner: {
        type: ObjectId,
        ref: 'user'
    }
}, { timestamps: true })

video_schema.plugin(mongoose_aggregate_paginate)
module.exports = mongoose.model("video", video_schema)