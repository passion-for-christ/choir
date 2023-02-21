import classes from './AdminTable.module.scss';

const AdminTable = props => {
    return ( 
        <div className={classes.adminTable}>
            <table>
                {props.children}
            </table>
        </div>
    );
};

export default AdminTable;