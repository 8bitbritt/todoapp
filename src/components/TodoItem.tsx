import classes from './TodoItem.module.css';


const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
<div className={classes.listitem}>
  <label htmlFor="complete">Complete todo item</label>
       <input type="checkbox" name="complete" id="complete" />
    <li className={classes.item}>
      {props.text} 
    </li>
    <button className={classes.remove} onClick={props.onRemoveTodo} title="remove a Todo">&#215;</button>
</div>
  );
};

export default TodoItem;
