

const express = require('express');
const router = express.Router();
const { File } = require('./models');

// CREATE
router.post('/', async (req, res) => {
  try {
    const doc = await File.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const docs = await File.find().populate('projectId');
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const doc = await File.findById(req.params.id).populate('projectId');
    if (!doc) return res.status(404).json({ error: 'File not found' });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const doc = await File.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: 'File not found' });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const doc = await File.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: 'File not found' });
    res.json({ message: 'File deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
