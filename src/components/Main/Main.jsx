import MainView from './MainView';
import withLayout from '../../hocs/withLayout';

function Main() {
  return (
    <div>
      <MainView />
    </div>
  );
}

export default withLayout(Main);
