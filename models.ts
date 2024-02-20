export interface ActionModalProps {
  title: string;
  show: boolean;
  message: string;
  type?: string;
  yesButtonText: string;
  noButtonText: string;
  onClose: () => void;
  onSubmit: () => void;
}
