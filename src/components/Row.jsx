import '../style/objects/container.css';

const Container = (props) => {
    return(
        <div className={`o-row ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Container;