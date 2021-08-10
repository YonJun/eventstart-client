import tw, { styled } from 'twin.macro';

const TestTwin = styled.div`
  ${tw`bg-gray-700 text-gray-100 text-center py-2 text-xl font-bold`}
`;

const Home = () => {
  return (
    <>
      <div className="bg-gray-700 text-gray-100 text-center py-2 text-xl font-bold">
        Say hi
      </div>
      <TestTwin>Say hi</TestTwin>
    </>
  );
};
export default Home;
