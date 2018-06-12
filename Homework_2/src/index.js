import './user.css';
import User from './User';

const root = document.getElementById('main');
const user = new User('Egor', 'Onufriychuk', 'developer', 25);

user.render(root);

