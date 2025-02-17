import React from 'react';
import ServiceItem from './ServiceItem';
import styles from './ServiceSection.module.css';

function ServiceSection() {
  const services = [
    { id: 1, bgColor: '#22356F', text: 'Годовое ТО' },
    { id: 2, bgColor: '#0052C1', text: 'Выравнивание колес' },
    { id: 3, bgColor: '#76B58B', text: 'Настройка переключателей' },
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesDescription}>
        <p>
          Приехав к нам однажды, многие наши клиенты становятся 
          постоянными, а часть из них даже друзьями.
        </p>
        <p>
          А также в нашей мастерской можно отремонтировать 
          электросамокат и электровелосипед.
        </p>
      </div>
      <div className={styles.servicesItems}>
        {
          services.map(service => 
            <ServiceItem 
              key={service.id}
              bgColor={service.bgColor}
              text={service.text}
            />
          )
        }
      </div>
    </section>
  );
}

export default ServiceSection;