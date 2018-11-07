import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import moment from 'moment';



const testFiles = [
{
id: 1,
name: 'src',
type: 'folder',
updated_at: "2016-07-11 21:24:00",
latestCommit: {
message: 'Initial commit'
}
},
{
id: 2,
name: 'tests',
type: 'folder',
updated_at: "2018-07-11 21:24:00",
latestCommit: {
message: 'Initial commit'
}
},
{
id: 3,
name: 'README',
type: 'file',
updated_at: "2018-10-18 21:24:00",
latestCommit: {
message: 'Added a readme'
}
},
];
// put the ReactDOM.render call here
// pass testFiles as FileList's file prop










const FileIcon = (props) => {
	
	let icono = (props.fileIcon === 'folder' ?  'iFolder fas fa-folder' : 'far fa-file-alt'); 
	
	return (
	
		<i className={icono}/>
	
	);
}
FileIcon.propTypes = {
	file: PropTypes.object.isRequired
};
const FileName = (props) => {
	return (
			<span>{props.fileName}</span>
	);
}
FileName.propTypes = {
	file: PropTypes.object.isRequired
};
const CommitMessage = (props) => {
	return (
	<span>{props.commitM}</span>
	);
}
const Time = (props) => {
	const timeString = moment(props.time).fromNow();
	return (<span>{timeString}</span>);
}
Time.propTypes = {
	time: PropTypes.string.isRequired
};
class FileList extends React.Component{
	render(){
		let items = (this.props.files).map( item => (
			<FileListItem 
				key = {item.id}
				fileIcon = {item.type}
				fileName = {item.name}
				commitM = {item.latestCommit.message}
				time = {item.updated_at}
			/>
		));
		return(
		<table className="fileList">
			<tbody>		
			{items}
			</tbody>
		</table>
		
		);
	}
}
class FileListItem extends React.Component{
	
	render(){
		
		return (
			<tr className="fileListItem">
				<td className="fileIcon"><FileIcon fileIcon={this.props.fileIcon}/></td>
				<td className="fileName"><FileName
					fileName={this.props.fileName}
				/></td>
				<td className="commitMessage"><CommitMessage 
					commitM={this.props.commitM}
				/></td>
				<td className="age"><Time time={this.props.time}/></td>
			</tr>
		);
	}
	
}



class App extends Component {
  render() {
    return (
      <div className="App">
		<FileList files={testFiles}/>
      </div>
    );
  }
}

export default App;
