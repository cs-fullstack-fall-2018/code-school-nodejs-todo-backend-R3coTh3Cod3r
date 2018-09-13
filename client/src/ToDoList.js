import React, {Component} from 'react';


class ToDoList extends Component {
    render() {
        //console.log("Array")
        //console.log(this.props.arr)
      
        var forEachItem = this.props.arr.map(
            eachItem => {
                //console.log(eachItem.isDone)

                return(
                    <div>
                        <p>

                            {eachItem.username } has to { eachItem.todo} {eachItem.isDone.toString()}
                        </p>
                        <hr/>
                    </div>

                )

            }


        );

        return (

            <div>

                <h2>{this.props.arr.todo}</h2>
                <h2> {forEachItem}</h2>

            </div>


        );


    }




}
export default ToDoList;