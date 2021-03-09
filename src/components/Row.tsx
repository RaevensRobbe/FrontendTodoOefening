import '../style/objects/container.css';

const Container = (props : any) => {
    return(
        <div className={`o-row ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Container;