import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ThemeContext from '../../context/ThemeContext';
import { BUTTON, LABEL, THEMES } from '../../constants/constants';
import ButtonView from '../../components/Button/ButtonView';
import styles from './sass/Todo.module.scss';

export default function TodoView({
  changeInput,
  userValue,
  handlerAddTask,
  todos,
  handlerDragStart,
  handlerDragEnd,
  handlerDragOver,
  handlerDrop,
  isDragEnd,
  isOver
}) {
  const {
    theme,
    toggleTheme
  } = useContext(ThemeContext);

  const { t } = useTranslation();

  const checked = theme === THEMES.LIGHT;
  const colorLabel = theme === THEMES.LIGHT ? LABEL.SECONDARY : LABEL.PRIMARY;

  return (
    <section id={styles.todo}>
      <div className={styles['todo-container']} style={{ backgroundColor: theme }}>
        <div className={styles['todo-row']}>
          <input
            className={styles.input}
            type="text"
            placeholder={t('todoPage.inputPlaceholder')}
            onChange={changeInput}
            value={userValue}
          />
          <ButtonView
            click={handlerAddTask}
            text={t('todoPage.buttonCreate')}
            variant={BUTTON.ADD}
          >
            <FontAwesomeIcon icon={faPlus} />
          </ButtonView>
        </div>

        <div className={styles['todo-items']}>
          {
            todos.map((todo, index) => (
              <div
                draggable="true"
                onDragStart={() => handlerDragStart(index)}
                onDragEnd={handlerDragEnd}
                onDragOver={(e) => handlerDragOver(e, todo)}
                onDrop={() => handlerDrop(index)}
                className={`${styles['todo-item']}
                ${isOver(todo) ? styles.over : ''}
                ${isDragEnd ? styles.dragend : ''}
                `}
                key={todo.id}
              >
                {todo.task}
              </div>
            ))
          }
        </div>

        <div className={styles['toggle-switch']}>
          <label style={{ color: colorLabel }} htmlFor="switch">
            {t('todoPage.labelMode')}
          </label>
          <Switch id="switch" checked={Boolean(checked)} onChange={toggleTheme} />
        </div>
      </div>
    </section>
  );
}

TodoView.propTypes = {
  changeInput: PropTypes.func,
  userValue: PropTypes.string.isRequired,
  handlerAddTask: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      task: PropTypes.string,
    })
  ).isRequired,
  handlerDragStart: PropTypes.func.isRequired,
  handlerDragEnd: PropTypes.func.isRequired,
  handlerDragOver: PropTypes.func.isRequired,
  handlerDrop: PropTypes.func.isRequired,
  isDragEnd: PropTypes.bool.isRequired,
  isOver: PropTypes.func.isRequired,
};

TodoView.defaultProps = {
  changeInput: () => {
  }
};
