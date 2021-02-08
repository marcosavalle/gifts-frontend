import HomeIcon from '@material-ui/icons/HomeOutlined';
import GiftIcon from '@material-ui/icons/Redeem';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';
import BlockIcon from '@material-ui/icons/Block';
import BarChartIcon from '@material-ui/icons/BarChart';

export type MenuItem = {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  path: string;
};

export type DocumentationLink = {
  text: string;
  path: string;
};

const home: MenuItem = {
  text: 'Inicio',
  icon: HomeIcon,
  path: '/',
};

const notifications: MenuItem = {
  text: 'Notificaciones',
  icon: NotificationsIcon,
  path: '/notificaciones',
};

const giftSend: MenuItem = {
  text: 'Regalos enviados',
  icon: GiftIcon,
  path: '/enviados',
};

const giftReceived: MenuItem = {
  text: 'Regalos recibidos',
  icon: GiftIcon,
  path: '/recibidos',
};

const blockedUsers: MenuItem = {
  text: 'Usuarios bloqueados',
  icon: BlockIcon,
  path: '/bloqueados',
};

const stats: MenuItem = {
  text: 'Estadísticas',
  icon: BarChartIcon,
  path: '/estadisticas',
};

const userManual: DocumentationLink = {
  text: 'Manual de usuario',
  path:
    'https://drive.google.com/file/d/1I85qQlstRL0nhQKptG0UcP2aJuIHDVrh/view?usp=sharing',
};

const projectManagement: DocumentationLink = {
  text: 'Administración del proyecto',
  path:
    'https://drive.google.com/file/d/1elyfAhng7Jf1x2wusUEplVk1OVehYLyJ/view?usp=sharing',
};

const tickets: DocumentationLink = {
  text: 'Anexo: tickets de Jira',
  path:
    'https://drive.google.com/file/d/17V8TpXeEiZYnUzSXCsaQSKdC4nl6pve6/view?usp=sharing',
};

const project: DocumentationLink = {
  text: 'Proyecto final',
  path:
    'https://drive.google.com/file/d/1GzpsDQ2_DQZd6001ortgEasz-vMVAkCB/view?usp=sharing',
};

export const MENU_ITEMS: MenuItem[] = [home, giftSend, giftReceived, stats];
export const DOCUMENTATION_LINKS: DocumentationLink[] = [
  project,
  userManual,
  projectManagement,
  tickets,
];
