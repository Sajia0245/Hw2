import React from 'react';

const TableHeader = () => {
    // boilerplate table header functional component
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Remove</th>
        </tr>
        </thead>
    );
}

const TableBody = props => {
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        return (
            <div>
                <tr key={index}>
                    <td>{row.name}</td>
                    <td><a href={row.URL}>{row.URL}</a></td>
                    <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
                </tr>
            </div>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { linkData, removeLink } = props;

    return (
        <div>
            <TableHeader/>
            <TableBody linkData={linkData}/>
        </div>

    );

}

export default Table;