import React from 'react';
import './Page1.css';


class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      name:'',
      isToggle:false,
      data:[]
    } ;

    // this.handleClick = this.handleClick.bind(this);
  }
  const
  saveName(e){
    this.setState({
      name: e.target.value
    });
  }
  saveAge(e){
    this.setState({
      age: parseInt(e.target.value)
    });
  }
  add(e){
    this.setState({
      age: this.state.age+1
    });
  }
  minus(e){
    if(this.state.age!==0) {
      this.setState({
        age: this.state.age-1
      });
    }
  }
  handleExist(index) {
    let temp3=this.state.data;
    for(let i=0;i<temp3.length;i++){
      if(temp3[i].name===index){
        return false;
      }
    }
    return true;
  }
  insertData(){
    let temp1={
      "name":this.state.name,
      "age":this.state.age
    };
    let temp2=this.state.data;
    temp2.push(temp1);
    this.setState({ data: temp2});
  }
  submitClick(){
    this.handleExist(this.state.name) === true
    ? this.insertData()
    : window.confirm('This name is already present try other')

  }

  renderTableData() {
    return this.state.data.map((item, index) => {
       const {name, age } = item;
       return (
          <tr key={name}>
             <td>{name}</td>
             <td>{age}</td>
          </tr>
       )
    })
 }
 renderTableHeader() {
  let header = Object.keys(this.state.data[0])
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
  })
 }
  render() {
   return (
    <div style={{"align":"center","paddingTop":100}}>
      Name<input type="text"onChange={(e)=>this.saveName(e)} />
      <br/>
      <button onClick={(e1)=>this.add(e1)}>+</button>
       Age <input disabled type="number" value={this.state.age}onChange={(e)=>this.saveAge(e)}/>
      <button onClick={(e1)=>this.minus(e1)}>-</button>
      <br/>
      <button disabled={this.state.name===''&this.state.age===0 ? true :false} onClick={(e1)=>this.submitClick(e1)}>Submit</button>
      {
        this.state.data.length>0 ?
          <table id='students'>
            <tbody>
              <tr>
              {this.renderTableHeader()}
              </tr>
              {this.renderTableData()}
            </tbody>
          </table>
        :""
      }
    </div>
   );
  }
}

export default Page1;
