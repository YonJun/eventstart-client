import { FC } from 'react';
import tw, { styled } from 'twin.macro';

const TestTwin = styled.div`
  ${tw`bg-gray-700 text-gray-100 text-center py-2 text-xl font-bold`}
`;
interface ChildProps {
  name: string;
}
const Child: FC<ChildProps> = ({ name }) => {
  return <div>{name}</div>;
};
interface Child2Props {
  name: string;
  prop1: string;
  prop2: string;
  prop3: string;
  prop4: string;
  prop5: string;
}
const Child2: FC<Child2Props> = ({ name }) => {
  return <div>{name}</div>;
};

const Home = () => {
  return (
    <>
      <div className="bg-gray-700 text-gray-100 text-center py-2 text-xl font-bold">
        Say hi
      </div>
      <TestTwin>Say hi</TestTwin>
      <Child />

      <Child2
        name="Lorem"
        prop1="Lorem"
        prop2="Lorem"
        prop3="Lorem"
        prop4="Lorem"
        prop5="Lorem"
      />
    </>
  );
};
export default Home;
