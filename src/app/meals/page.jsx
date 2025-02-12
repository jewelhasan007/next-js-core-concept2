
import { getServerSession } from 'next-auth';
import MealsPage from '../components/MealsPage';
import { authInfo } from '../api/auth/[...nextauth]/route';

export const metadata = {
    title: {
      absolute: "Meals Page",
    },
    description: "Generated by create next app",
    keywords: "Meals|| Meals Page"
  };

const page = async () => {
    const session = await getServerSession(authInfo)
    // console.log({session})
    return (
     <div>
<MealsPage></MealsPage>
     </div>
    );

}
export default page;