import { ceoImg, support_staff } from '../../assets/allImg';
import EmployDetails from '../../components/aboutPage/EmployDetails';
import WeOffer from '../../components/aboutPage/WeOffer';
import Breadcrumbs from '../../components/designLayouts/Breadcrumbs';

const About = () => {
  let title1 = 'Who we are';
  let title2 = 'Our Goal and Idea';
  let details1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum. Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.
Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.`;
  let details2 = `Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci. Nulla lobortis sem dapibus, aliquet turpis eu, ornare neque. Sed nec sem diam. Mauris neque purus, malesuada at velit vel, tempus congue nisl. Ut aliquam semper augue hendrerit varius. Fusce pretium tempus volutpat. Vivamus dignissim posuere aliquet. In hac habitasse platea dictumst.`;
  return (
    <div>
      <div className="ms-3">
        <Breadcrumbs title={'About Us'} />
      </div>
      <div className="my-1">
        <EmployDetails
          title={title1}
          details={details1}
          emplyImg={ceoImg}
          emplyName={'Monirujjaman'}
          designation={'CEO/Founder'}
        />
        <EmployDetails
          title={title2}
          details={details2}
          emplyImg={support_staff}
          emplyName={'Smith John'}
          designation={'Support Staff'}
        />
      </div>
      <WeOffer />
    </div>
  );
};

export default About;
