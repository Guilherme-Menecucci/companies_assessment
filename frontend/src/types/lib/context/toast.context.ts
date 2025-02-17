import { TToastProps } from '../../components/Toast';

type TToastContextData = {
  /**
   * @function addToast
   * Adds a toast to the list
   * @returns Return de id of the toast created, in case to remove early
   */
  addToast(data: TToastProps): string;

  /**
   * @function removeToast
   * Remove a toast from the list early
   * @param number Id of the toast to be removed
   */
  removeToast(id: string): void;
};

type TToast = TToastProps & {
  id: string;
  ref: React.MutableRefObject<null>;
  timedOut?: number;
};

export type { TToast, TToastContextData };
