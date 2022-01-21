import React, { useEffect } from 'react';
import './NavigationFive.scss';
import { useDispatch } from 'react-redux';
import TitleNNav from '../../../B4Components/B4Header/TitleNNav';
import HeroHeader from './HeroHeader/HeroHeader';
import Navtigation from './Navigation/Navtigation';
import { actionFetchMagazineMenu } from './Redux/actionFetchMagazineMenu';

function NavigationFive() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchMagazineMenu())
  }, [dispatch])



  return (

    <div className="navigation-5">
      <TitleNNav title={'Navigation 5'} href="/b4navigations" />
      <HeroHeader />
      <div className="min-vh-100">
        <Navtigation />
        <div>
          <h1>Page content</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus enim facere, debitis vel delectus, iusto amet repellat deserunt nesciunt ratione molestias incidunt alias, necessitatibus corporis. Delectus non veniam laboriosam cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minus consequatur praesentium id quis eos maiores, saepe earum maxime ipsa. Eligendi, earum. Asperiores, non quod perspiciatis natus quidem excepturi deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi delectus soluta deleniti libero sed repellendus hic saepe odio iure deserunt ut autem perferendis optio alias, ipsum molestias voluptatem! Nesciunt eligendi, facere quibusdam perspiciatis sit incidunt odio perferendis. Iure illum, blanditiis eveniet suscipit facere laborum, aliquid accusantium tempore, aliquam maiores vero eos iste expedita ex sequi dolor? Quae, molestiae. Quaerat voluptatibus quis veniam culpa distinctio. Blanditiis porro similique deserunt, exercitationem quis possimus nemo facilis adipisci consequuntur expedita ut aspernatur sit velit accusantium asperiores molestias ea perferendis maxime aperiam iste architecto. Beatae, doloremque ipsam iure inventore totam voluptatem, deleniti perferendis id ea consequuntur, ratione quis magnam corrupti! Dignissimos explicabo a sunt, deleniti reiciendis debitis perspiciatis beatae? Hic quo, natus, inventore doloremque cum veniam incidunt optio eum ab dolorem excepturi nam quam quasi quidem, ratione porro alias blanditiis molestiae voluptates sint! Ex ullam quasi necessitatibus quia? Consectetur labore, aspernatur facere sit praesentium enim quae suscipit sapiente. Ipsa repellendus nulla qui ipsam eum nesciunt mollitia, doloremque ullam tempore, doloribus veritatis facilis, quis est enim soluta. Autem magnam id nulla deleniti totam, sequi iusto amet sint quia ducimus quaerat enim culpa cumque, quam dolore consequatur repudiandae provident? Nam quidem vitae libero natus cupiditate autem delectus veniam porro numquam, reprehenderit at? Odit, adipisci. Sapiente voluptatum ab obcaecati sint ducimus, laborum nostrum officiis accusamus qui doloremque, quas officia! Cum excepturi hic debitis nostrum eaque rem ipsam! Porro dolor quo libero quisquam facilis ipsa quia magnam aspernatur? Reprehenderit adipisci saepe minus? Nulla exercitationem praesentium illo voluptas asperiores enim aliquid eveniet. Quam consequuntur asperiores ab deleniti cupiditate quos, hic, ad sequi cum labore nihil perferendis? Quia ipsa iure quos itaque dignissimos doloremque quam, aliquid illo dolore fugit omnis? Deserunt repellat dolorum culpa adipisci animi fugiat tempora, perspiciatis harum laborum, id officiis. Eius quisquam ipsa ea id? Aut ipsam omnis nam repellendus distinctio repudiandae facilis illum tempora impedit dolore! Nisi, perspiciatis voluptates sed natus ut aliquam recusandae voluptatum beatae eos. Iste sint eius corporis repudiandae, rerum accusamus ab sed facere velit nam quod nobis autem sequi adipisci asperiores quae mollitia, debitis earum atque. Consequuntur deserunt sequi ipsa amet tempora, provident vel repudiandae, sunt quia sapiente harum ex optio neque quam! Quos quis libero a ad nulla dignissimos totam. Sint corrupti temporibus at doloremque modi reprehenderit culpa quas perferendis pariatur et consequuntur adipisci illum fugiat tempora, dolorum iure praesentium rem exercitationem! Accusamus, ipsum? Porro expedita distinctio, ducimus veniam quod, soluta dicta nulla quae quidem fugiat odio tempora inventore accusantium, eaque delectus possimus nihil ratione. Similique nobis ipsum quisquam dignissimos vel mollitia nam sed facilis facere tempore, molestias atque ea consectetur ipsam corrupti harum! Quos, velit? Architecto voluptatibus, ea assumenda neque accusantium nihil exercitationem dolorem hic nisi inventore nostrum laboriosam quibusdam, atque officia nam mollitia aliquam ad id dolor? Natus enim aspernatur dolorem consectetur omnis quas eius impedit sapiente asperiores. Omnis architecto cupiditate sit officiis esse ea! Cum eum fugiat culpa deserunt at eos recusandae pariatur dolor facere! Maiores, nam laborum quae delectus nesciunt fugiat officia quasi ipsum accusantium obcaecati totam sunt impedit, similique distinctio esse provident velit porro eaque adipisci harum. Laudantium aspernatur, delectus voluptatum, tempora labore doloribus quae itaque numquam ipsam sequi ratione mollitia. Assumenda voluptates asperiores atque beatae? Repellat quam nihil sed error quod aspernatur quo sunt accusantium ad reprehenderit quibusdam sapiente, eaque, omnis vitae. Necessitatibus neque quod officiis reprehenderit, corporis rerum. Ex, recusandae! Perspiciatis nobis expedita maxime explicabo quidem voluptates quae soluta saepe non culpa, adipisci nam veritatis molestiae voluptatibus rerum nulla numquam. Id laudantium dolores ipsam. Vero explicabo, fuga perspiciatis illum laboriosam temporibus beatae blanditiis! Voluptate ad, quibusdam libero accusantium recusandae ex magni exercitationem veritatis nulla non mollitia repellendus sapiente ab ratione dolores dignissimos placeat consectetur aspernatur sint aut iusto harum inventore fugiat. Harum iure pariatur labore, iusto enim ipsum provident repellat hic, aliquid fugiat accusantium porro distinctio earum aperiam animi excepturi, voluptas commodi sed. Adipisci iusto sunt, dicta tenetur quidem vitae rerum reprehenderit expedita ipsa autem, quam, architecto dolorem molestias dolor cum necessitatibus facere culpa officia cupiditate earum perspiciatis fugit impedit illo. Saepe qui ad ipsa ex quis officia eveniet earum dolore consequatur facere vitae alias culpa, voluptatem placeat fugiat. Officia maiores saepe sunt, fuga aliquid beatae reprehenderit doloremque in, inventore ratione hic? Debitis, corporis?</p>
        </div>
      </div>
    </div>
  )
}
export default NavigationFive