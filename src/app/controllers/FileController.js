import File from '../models/File';
import User from '../models/User';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({
      name,
      path,
    });
    const archive = await File.findOne({
      where: { path },
    });
    const userSession = await User.findOne({ where: { id: req.userId } });
    userSession.avatar_id = archive.id;
    userSession.save();
    return res.json(file);
  }
}

export default new FileController();
