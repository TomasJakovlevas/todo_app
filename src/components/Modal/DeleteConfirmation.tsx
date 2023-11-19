import DeleteIcon from '@/icons/delete/deleteIcon';
import Button from '../Button';
import Wrapper from './Wrapper';
import CloseIcon from '@/icons/close/closeIcon';

type DeleteConfirmationProp = {
  deleteAction: () => void;
  cancelAction?: () => void;
};

const DeleteConfirmation = ({
  deleteAction,
  cancelAction,
}: DeleteConfirmationProp) => {
  return (
    <Wrapper size='m'>
      <div className='text-quaternary'>
        <h3 className='text-2xl text-center'>Delete this todo?</h3>
        <p className='text-xs text-center text-secondary_l1'>
          Caution: This cannot be undone
        </p>
        <div className='mt-2 flex gap-2 justify-around'>
          <Button
            label='Delete'
            variant='danger'
            action={deleteAction}
            Icon={DeleteIcon}
          />
          {cancelAction && (
            <Button label='Cancel' action={cancelAction} Icon={CloseIcon} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default DeleteConfirmation;
