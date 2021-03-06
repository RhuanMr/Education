import * as Yup from 'yup';
import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            role: Yup.string().required(),
            password: Yup.string().required().min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fail.' });
        }

        const userExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExists) {
            return res.status(400).json({ error: 'User exists' });
        }

        const { id, name, email, role } = await User.create(req.body);

        return res.json({ id, name, email, role });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            oldPassword: Yup.string().min(6),
            password: Yup.string()
                .min(6)
                .when('oldPassword', (oldPassword, field) =>
                    oldPassword ? field.required() : field
                ),
            confirmPassword: Yup.string().when('password', (password, field) =>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            ),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fail.' });
        }

        const { email, oldPassword } = req.body;

        const user = await User.findByPk(req.userId);

        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json({ error: 'Wrong password.' });
        }

        const { id, name, role } = await user.update(req.body);

        return res.json({
            id,
            name,
            email,
            role,
        });
    }
}

export default new UserController();
