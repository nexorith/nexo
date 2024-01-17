import styles from "./Ourclients.module.scss";
import Image from "next/image";

export const Ourclients = () => {
    return (
        <>
       
<section className="team"  id="our_portfolio" >
 

  <div className="row">
      <div className="card">
          <div className="image">
              <Image src="/home/chef.png"  className={styles.awardImage}
              height={40}
              width={40}
              alt="Chef Neapal"/>
          </div>
          <div className="info">
              <h3>Chef Nepal
                Through Digital Everest</h3>
         
          </div>
      </div>
  </div>
  <div className="row">
      <div className="card">
          <div className="image">
              <Image src="/home/logo_ratna_name.png" alt="Team member 1"/>
          </div>
          <div className="info">
              <h3>4 Start Hotel of Lumbini
                Hotel Ratnasambhava </h3>
            
          </div>
      </div>
  </div>
  <div className="row">
      <div className="card">
          <div className="image">
              <Image src="/home/digitaleve.jpg" alt="Team member 1"/>
          </div>
          <div className="info">
              <h3>Digital Everest</h3>
              
          </div>
      </div>
  </div>
  <div className="row">
    <div className="card">
        <div className="image">
            <Image src="/home/Shetlapng.png" alt="Team member 1"/>
        </div>
        <div className="info">
            <h3>Shetla</h3>
            
        </div>
    </div>
</div>
  <div className="row">
      <div className="card">
          <div className="image">
              <Image src="/home/bake.jpg" alt="Team member 1"/>
          </div>
          <div className="info">
              <h3>Bake & Take</h3>
              
          </div>
      </div>
  </div>
  <div className="row">
    <div className="card">
        <div className="image">
            <Image src="/home/cafe.jpg" alt="Team member 1"/>
        </div>
        <div className="info">
            <h3>Cafe Accent</h3>

            
        </div>
    </div>
</div>
<div className="row">
    <div className="card">
        <div className="image">
            <Image src="/home/sound.png" alt="Team member 1"/>
        </div>
        <div className="info">
            <h3>Soundlines Group</h3>
            
        </div>
    </div>
</div>
</section>
        
            
        </>

    );
};

export default Ourclients;