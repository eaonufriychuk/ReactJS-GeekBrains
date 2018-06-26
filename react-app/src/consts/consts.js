import {
  v4
} from 'uuid';

export const menuItems = [{
    id: v4(),
    link: '/',
    title: 'Home'
  },
  {
    id: v4(),
    link: '/blog',
    title: 'Blog'
  },
  {
    id: v4(),
    link: '/comments',
    title: 'Comments'
  },
  {
    id: v4(),
    link: '/users',
    title: 'Users'
  },
];

export const sideBar = [{
    id: v4(),
    link: '#',
    title: 'About'
  },
  {
    id: v4(),
    link: '#',
    title: 'Archives'
  },
  {
    id: v4(),
    link: '#',
    title: 'Elsewhere'
  }
];

export const footer = [{
    id: v4(),
    link: 'https://www.facebook.com/profile.php?id=100014087160478'
  },
  {
    id: v4(),
    link: 'https://vk.com/id15189473'
  },
  {
    id: v4(),
    link: 'https://github.com/eaonufriychuk'
  }
];

export const formatDate = (date) => {
  let d = new Date(date),
    month = `${d.getMonth() + 1}`,
    day = `${d.getDate()}`,
    year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};