import styles from "./JobStagesSection.module.css";

export const JobStagesSection = () => {
  return (
    <section
      className={styles.jobStagesSection}
      aria-labelledby="job-stages-title"
    >
      <div className={`container ${styles.container}`}>
        <header>
          <h2 className={styles.title} id="job-stages-title" data-aos="fade-up">
            What we do?
          </h2>
        </header>

        <div className={styles.stages}>
          <div className={`${styles.stage} ${styles.stageFirst}`}>
            <div
              className={styles.icon}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img src="/home/communication.png" alt="" width="40"/>
            </div>
            <h3>Strategic Digital Presence</h3>
            <p
              className={styles.stageDescription}
              data-aos="fade-up"
              data-aos-delay="300"
            >
             We kick off by understanding your unique goals and audience. Through meticulous market analysis, we identify opportunities that set your brand apart. Our tailored strategies not only drive traffic but engage your audience, converting leads into long-term customers.
            </p>
          </div>
          <div className={`${styles.stage} ${styles.stageSecond}`}>
            <div
              className={styles.icon}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img src="/home/communication.png" alt="" width="40"/>
            </div>
            <h3> Multi-Faceted Marketing Campaigns</h3>
            <p
              className={styles.stageDescription}
              data-aos="fade-up"
              data-aos-delay="300"
            >
               From social media and SEO to PPC and content creation, we employ a multi-faceted approach to amplify your online reach. This ensures your brand is not only visible but leaves a lasting impression. We don't just aim for likes; we aim for meaningful connections that result in tangible business growth.
            </p>
          </div>
          <div className={`${styles.stage} ${styles.stageThird}`}>
            <div
              className={styles.icon}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {/* add svg file */}
              <img src="/home/communication.png" alt="" width="40"/>
            </div>
            <h3>Constant Optimization for Results</h3>
            <p
              className={styles.stageDescription}
              data-aos="fade-up"
              data-aos-delay="300"
            >
             Our commitment doesn't end with the campaign launch. We believe in continuous improvement through data-driven optimization. Our team monitors key metrics, analyzes performance, and adapts strategies in real-time. 
             This iterative process ensures that your marketing efforts stay ahead of industry trends, delivering measurable results and a significant return on investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
