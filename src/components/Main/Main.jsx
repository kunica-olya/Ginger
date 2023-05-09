import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import MainView from './MainView';
import withLayout from '../HOC/withLayout';
import { fetchCards } from '../../store/slices/cards/slice';

function Main() {
  const dispatch = useDispatch();

  const handlerUpdateData = useCallback(() => {
    dispatch(fetchCards());
  }, []);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <div>
      <MainView handlerUpdate={handlerUpdateData} />
    </div>
  );
}

export default withLayout(Main);
