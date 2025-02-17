import styles from './ServiceSection.module.css'; 

function ServiceItem(props) {
  const { bgColor, text } = props;
  
  return (
    <div className={styles.serviceItem} style={{ backgroundColor: bgColor }}>
      <p>{ text }</p>
    </div>
  )
}

export default ServiceItem;