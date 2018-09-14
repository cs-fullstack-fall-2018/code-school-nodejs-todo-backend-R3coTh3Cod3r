import React, {Component} from 'react';


class ToDoList extends Component {
    render() {
        //console.log("Array")
        //console.log(this.props.arr)

        var forEachItem = this.props.arr.map(
            eachItem => {
                //console.log(eachItem.isDone)
                    if(eachItem.isDone === true){
                        (eachItem.isDone) = "is Done"}
                else if(eachItem.isDone ===false)
                        (eachItem.isDone) = "is not Done"


                return(
                    <div>
                        <p>

                            {eachItem._id} {eachItem.username } has to { eachItem.todo} {eachItem.isDone}
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