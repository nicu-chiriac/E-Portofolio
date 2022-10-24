import React from 'react';
import './Skills.css';
import items from './../../assets/items/items';

const Skills = () => {
  return (
    <section className='skills container section'>
      <h1 className='section__title'>Technical skill set</h1>
      <div className="item__containers">
        <div className="item__container">
          <h2>Frontend</h2>
          <div className="item__grid">
            {items.filter((item) => item.category === 'frontend').map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="item__container">
          <h2>Backend</h2>
          <div className="item__grid">
            {items.filter((item) => item.category === 'backend').map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="item__container">
          <h2>Tools</h2>
          <div className="item__grid">
            {items.filter((item) => item.category === 'tools').map((item) => (
              <div className="item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills