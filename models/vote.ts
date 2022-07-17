import mongoose from 'mongoose'

const VoteSchema = new mongoose.Schema({
  voter: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
})

export default mongoose.models.Vote || mongoose.model('Vote', VoteSchema)
