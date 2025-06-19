// models.js
const mongoose = require('mongoose');
const { Schema } = mongoose;



// USER MODEL
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);




// PROJECT MODEL
const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  status: { type: String, enum: ['pending', 'active', 'completed', 'on-hold'], default: 'pending' },
  tracking: { type: String }, // Optional: you can use enum if it has limited values
}, { timestamps: true });

const Project = mongoose.model('Project', ProjectSchema);





// EVENT MODEL
const EventSchema = new Schema({
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
}, { timestamps: true });

const Event = mongoose.model('Event', EventSchema);






// TODO MODEL
const TodoSchema = new Schema({
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  name: { type: String, required: true },
  assignees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  startDate: { type: Date },
  endDate: { type: Date },
  permissions: { type: String },
  description: { type: String },
}, { timestamps: true });






const Todo = mongoose.model('Todo', TodoSchema);

// COMMENT MODEL
const CommentSchema = new Schema({
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  text: { type: String, required: true },
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);

// FILES MODEL
const FileSchema = new Schema({
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  allFiles: [{ type: String }], // Store file URLs or paths
}, { timestamps: true });

const File = mongoose.model('File', FileSchema);

// Export all models
module.exports = {
  User,
  Project,
  Event,
  Todo,
  Comment,
  File,
};
