export const Task=(props)=>{
    return(
<div className="lists" style={{backgroundColor:props.background? "green":"red" }}>
                  <h3 className="task_Text">{props.taskName}</h3>
                  <button onClick={() =>props.backgroundChange(props.id)}>Complete</button>
                  <button onClick={() => props.removeList(props.id)}>x</button>
                </div>
    );
};