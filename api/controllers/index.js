const Note = require('../models/Note')

const getHome = async (req, res) => {
  res.json({ message: 'simple-notes API' });
};

const postNotes = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required.' });
  }

  try {
    const newNote = new Note({
      title,
      content
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getNotes = async (req, res) => {
  try {
    let notes = await Note.find();
    notes = notes.map(note => {
      return {
        _id: note._id,
        title: note.title,
        content: note.content,
        createdAt: note.createdAt.toLocaleString()
      }
    })
    return res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};



module.exports = {
  getHome,
  postNotes,
  getNotes
}
