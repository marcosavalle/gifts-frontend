export enum GiftMenuScope {
  SENDER,
  RECEIVER,
  ALL,
}

type GiftMenuOption = {
  text: string;
  action: string;
  scope: GiftMenuScope;
};

type GiftData = {
  bgColor: string;
  textColor: string;
  message?: string;
  menuOptions: GiftMenuOption[];
};

const DARK_BLUE = '#3483fa';
const GRAY = '#626262';
const GREEN = '#39b54a';
const RED = '#f03434';
const WHITE = 'white';

const cancelGift: GiftMenuOption = {
  text: 'Cancelar',
  action: 'cancelGift',
  scope: GiftMenuScope.ALL,
};

const editGift: GiftMenuOption = {
  text: 'Editar',
  action: 'edit',
  scope: GiftMenuScope.ALL,
};

const goToDetail: GiftMenuOption = {
  text: 'Ver detalle',
  action: 'goDetail',
  scope: GiftMenuScope.ALL,
};

const selectGift: GiftMenuOption = {
  text: 'Seleccionar regalo',
  action: 'selectGift',
  scope: GiftMenuScope.RECEIVER,
};

const payGift: GiftMenuOption = {
  text: 'Pagar',
  action: 'payGift',
  scope: GiftMenuScope.SENDER,
};

const resetGift: GiftMenuOption = {
  text: 'Reiniciar regalo',
  action: 'resetGift',
  scope: GiftMenuScope.SENDER,
};

const shareGift: GiftMenuOption = {
  text: 'Compartir',
  action: 'shareGift',
  scope: GiftMenuScope.SENDER,
};

const baseMenuOptions: GiftMenuOption[] = [goToDetail];

export const STATUS_DATA: { [key: string]: GiftData } = {
  '5edbad855c9105c43a9742b3': {
    bgColor: DARK_BLUE,
    textColor: WHITE,
    menuOptions: [...baseMenuOptions, cancelGift, selectGift, resetGift],
  },
  '5edbadf8b34b8da139f57938': {
    bgColor: GRAY,
    textColor: WHITE,
    menuOptions: [...baseMenuOptions, cancelGift, shareGift],
  },
  '5edbae001a43ad3034e4452b': {
    bgColor: GREEN,
    textColor: WHITE,
    menuOptions: [...baseMenuOptions],
  },
  '5edbae091b39627cc9cf989d': {
    bgColor: RED,
    textColor: WHITE,
    menuOptions: [...baseMenuOptions],
  },
  '5edbae19a46290928d48cf16': {
    bgColor: DARK_BLUE,
    textColor: WHITE,
    menuOptions: [...baseMenuOptions, cancelGift],
  },
  '5edbae28b822546d5d85bcf5': {
    bgColor: GREEN,
    textColor: WHITE,
    menuOptions: [...baseMenuOptions],
  },
  '5edbae3099e59d469b474a6c': {
    bgColor: DARK_BLUE,
    textColor: WHITE,
    menuOptions: [...baseMenuOptions, cancelGift, payGift, resetGift],
  },
  '5ee512b814c708d92fee7b46': {
    bgColor: GREEN,
    textColor: WHITE,
    menuOptions: [...baseMenuOptions],
  },
  '5f35da22c218bfc46494b348': {
    bgColor: RED,
    textColor: WHITE,
    menuOptions: [...baseMenuOptions],
  },
};

export const getCardInfo = (
  statusId: string,
  scope: GiftMenuScope
): GiftData => {
  const statusData = STATUS_DATA[statusId];

  statusData.menuOptions = statusData.menuOptions.filter((option) => {
    return option.scope === scope || option.scope === GiftMenuScope.ALL;
  });
  return statusData;
};

export const STATUS = {
  ACTIVO: '5edbad855c9105c43a9742b3',
  INACTIVO: '5edbaddf7789704081f83d57',
  ELIMINADO: '5edbade7d68a27bcbffd0fd2',
  BLOQUEADO: '5edbadef278a7f155505c1f0',
  PENDIENTE: '5edbadf8b34b8da139f57938',
  FINALIZADO: '5edbae001a43ad3034e4452b',
  CANCELADO: '5edbae091b39627cc9cf989d',
  EN_CURSO: '5edbae19a46290928d48cf16',
  FALLA_DELIVERY: '5edbae220eaf55b598645175',
  ENTREGADO: '5edbae28b822546d5d85bcf5',
  REGALO_SELECCIONADO: '5edbae3099e59d469b474a6c',
  PAGADO: '5ee512b814c708d92fee7b46',
  RECHAZADO: '5f35da22c218bfc46494b348',
  ERROR: '5f35da625dd7104d14cc8588',
};
