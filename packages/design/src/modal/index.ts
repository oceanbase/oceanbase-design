import Progress from './Progress';
import OriginModal from './Modal';
export * from 'antd/es/modal';
export type { ModalProgressProps } from './Progress';

export type ModalType = typeof OriginModal & {
  Progress: typeof Progress;
};

const Modal = OriginModal as ModalType;

Modal.Progress = Progress;

export default Modal as ModalType;
