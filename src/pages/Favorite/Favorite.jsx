import { useLoaderData, NavLink } from 'react-router-dom';
import './favorite.css'

function Favorite() {
  const favoriteLoder = useLoaderData()
  // console.log(favoriteLoder)
  const {title,companyName,logo,position,id,description} = favoriteLoder
  
  return (
    <div>
      <div className="favoriteSection">
        <div className="favoriteContainer">
         <h1>My Favorite Jobs</h1>
         <div className="favoriteItem">
            <div className="favoriteImg">
              <img src={logo} alt="" />
            </div>
            <div className="favoriteContent">
              <h3>{title}</h3>
              <h2>{companyName}</h2>
              <h4>{position}</h4>
              <p>{description}</p>
              <NavLink to={`/jobs/${id}/favorite/applynow`} className='ApplyNowBtn'>Apply Now</NavLink>
            </div>
          </div>
          <hr />
          <div className="favoriteRequirment">
            <p>
                <strong>Researching the Company : </strong>
                In order to excel in the process of Understanding the Organization, it is crucial to conduct comprehensive research on the company you aspire to work for, such as Microsoft. By thoroughly exploring the company’s background, culture, and values, you can gain an invaluable insight into their operations, objectives, and expectations.

                Here are four key points to consider when researching Microsoft:

                Firmly grasp Microsoft’s mission and values to align your aspirations with the company’s vision. This ensures your goals and ambitions are in sync with the organization’s ethos.
                Delve into the company’s history, including significant milestones and achievements. Understanding its evolution and contributions will demonstrate your genuine interest and commitment during interviews.
                Pay close attention to the company’s products, innovations, and ongoing projects. Familiarize yourself with latest technologies and trends associated with Microsoft, as this will showcase your dedication to staying updated and relevant in the industry.
                Examine the company’s culture, work environment, and employee testimonials. This will enable you to gauge whether your values and work style align with Microsoft’s, ensuring a harmonious fit for both parties.
                Apart from the aforementioned points, it is essential to highlight Microsoft’s commitment to diversity and inclusion, as well as its initiatives towards sustainability and social responsibility. By incorporating these aspects into your research, you can further exemplify your alignment with the company’s broader objectives.

                
            </p>
            <p>
                <strong>
                  Understanding Microsoft’s Culture and Values :
                </strong>
                Microsoft puts emphasis on innovation, collaboration, and individual empowerment. They value diversity and inclusion to create a supportive place where employees can share their perspectives. Through a growth mindset and learning opportunities, the company gives employees the resources they need to succeed.

                Making a positive effect in society is important to Microsoft. The AI for Good program and sustainability initiatives tackle global issues and make a difference. The company also supports philanthropic causes across the world.

                The concept of “One Microsoft” emphasizes the significance of collaboration between departments and teams. Breaking down silos, it encourages integration and collective success. Open communication and knowledge sharing allow employees to work towards shared goals.

                Forbes named Microsoft one of the World’s Most Admired Companies multiple times due to its excellent reputation for innovation and corporate social responsibility.
            </p>
             <p> <strong>Exploring Job Opportunities at Microsoft :</strong>
                Searching for an exciting job at Microsoft? Look no further! This article dives into the world of exploring Microsoft job opportunities. Discover valuable info to help you with your pursuit.

                Microsoft is known for its amazing innovations and technology. It provides a large range of jobs in several areas, such as software development, marketing, sales, and operations. Experienced or just starting your career? There are lots of chances for you at Microsoft.

                One special thing about Microsoft is that it values growth and development. The company provides many training programs and resources to help employees upgrade their skills and stay informed with the newest industry trends. This dedication to continuous learning sets Microsoft apart from other companies.

                Don’t miss out on this chance! Today, explore Microsoft’s website, check out job openings, and get ready for success. Join the Microsoft team and become part of something extraordinary. Your future starts now!
              </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Favorite;
