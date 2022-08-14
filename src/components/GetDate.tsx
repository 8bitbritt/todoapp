import classes from './GetDate.module.css'

const dayofWeek = new Date().toLocaleString('en-us', {  weekday: 'long' });
const month = new Date().toLocaleString('en-us', {  month: 'long' });
const date = new Date().toLocaleString('en-us', {  day : '2-digit'});
const year = new Date().toLocaleString('en-us', { year : 'numeric'});
 
const GetDate = () => {

return(
<div className={classes.date}>
<p className={classes.day}>{dayofWeek}</p>
<p className={classes.month}>{month} {date}, {year}</p>
</div>
)
}

export default GetDate;