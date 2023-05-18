import MainView from './MainView';
import withLayout from '../HOC/withLayout';

function Main() {
  return (
    <div>
      <MainView />
    </div>
  );
}

export default withLayout(Main);
