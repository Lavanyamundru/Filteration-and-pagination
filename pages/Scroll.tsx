import React, { useEffect, useState ,useMemo} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
const Div = styled.div`
  padding: 10px;
  background-color: dodgerblue;
  color: white;
  margin: 10px;
  width: 50%;
  box-sizing: border-box;
  position: relative;
  height: 1000px;
  overflow-y: scroll;
`;
const Buttonreset = styled.button`
  margin-left: 30px;
  background-color: #808080;
  margin-top: 20px;
  border: 1px solid transparent;
  border-radius: 3px;
  color: white;
  font-style: normal;
  font-size: 13px;
  width: 100px;
  height: 25px;
`;
const Label = styled.label`
  margin-left: 30px;
  font-size: 13px;
`;
const Input = styled.input`
  width: 400px;
  height: 30px;
  margin-left: 35px;
`;

const computedtodos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    date: new Date("07-20-2021"),
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
    date: new Date("10-10-2021"),
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
    date: new Date("07-20-2021"),
  },
  {
    userId: 1,
    id: 4,
    title: "rerum veniam amet",
    completed: true,
    date: new Date("07-09-2021"),
  },
  {
    userId: 1,
    id: 5,
    title: "vero rerum temporibus dolor",
    completed: false,
    date: new Date("10-22-2022"),
  },
  {
    userId: 2,
    id: 6,
    title: "et doloremque nulla",
    completed: false,
    date: new Date("02-20-2022"),
  },
  {
    userId: 2,
    id: 7,
    title: "ab voluptatum amet voluptas",
    completed: true,
    date: new Date("10-02-2022"),
  },
  {
    userId: 2,
    id: 8,
    title: "veritatis pariatur delectus",
    completed: false,
    date: new Date("03-15-2022"),
  },
  {
    userId: 2,
    id: 9,
    title: "laborum aut in quam",
    completed: true,
    date: new Date("05-25-2022"),
  },
  {
    userId: 2,
    id: 10,
    title: "repudiandae totam in est sint facere fuga",
    completed: false,
    date: new Date("02-04-2022"),
  },
  {
    userId: 3,
    id: 11,
    title: "sint sit aut vero",
    completed: false,
    date: new Date("06-15-2022"),
  },
  {
    userId: 3,
    id: 12,
    title: "totam quia non",
    completed: true,
    date: new Date("08-13-2022"),
  },
  {
    userId: 3,
    id: 13,
    title: "totam atque quo nesciunt",
    completed: false,
    date: new Date("09-19-2022"),
  },
  {
    userId: 3,
    id: 14,
    title: "nam qui rerum fugiat accusamus",
    completed: true,
    date: new Date("10-05-2022"),
  },
  {
    userId: 3,
    id: 15,
    title: "sit reprehenderit omnis quia",
    completed: false,
    date: new Date("12-25-2021"),
  },
  {
    userId: 4,
    id: 16,
    title: "deleniti ea temporibus enim",
    completed: true,
    date: new Date("12-20-2021"),
  },
  {
    userId: 4,
    id: 17,
    title: "aut velit saepe ullam",
    completed: false,
    date: new Date("02-11-2021"),
  },
  {
    userId: 4,
    id: 18,
    title: "sequi dolorem sed",
    completed: true,
    date: new Date("11-13-2021"),
  },
  {
    userId: 4,
    id: 19,
    title: "suscipit qui totam",
    completed: false,
    date: new Date("04-25-2021"),
  },
  {
    userId: 4,
    id: 20,
    title: "et quia ad iste a",
    completed: false,
    date: new Date("05-18-2021"),
  },
];
const Content = () => {
  const [posts, setPosts] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const todosPerPage = 5;
  useEffect(() => {
    setPosts(computedtodos.slice(0, 5));
  }, []);
const getMorePost = async () => {
    if (posts.length == computedtodos.length) {
      setHasMore(false);
    }
    let slicedData = computedtodos.slice(posts.length, posts.length + 5);
    setPosts((post: any) => [...post, ...slicedData]);
  };
  const resetFilter = () => {
    setSearchTerm("");
    
    setCurrentPage(1);
  };
  
    
return (
    <>
    <div className="mb-3">
        <Label htmlFor="search" className="form-label">
          Search
        </Label>
        <Input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search Title"
          value={searchTerm}
          onChange={(e) => {
          setSearchTerm(e.target.value);
            setCurrentPage(1);
            getMorePost();

          }}
        />
        <Buttonreset
          type="button"
          className="btn btn-danger btn-sm"
          onClick={resetFilter}
        >
          Reset Filters
        </Buttonreset>
      </div>

     
    
      <Div>
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          hasMore={hasMore}
          loader={<h3> Loading...</h3>}
          endMessage={<h4>Nothing more to show</h4>}
        >
        
          {posts. filter((data:any) => {
              if (data.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return data
              }
            }).map((data: any) => (

            <div key={data.id}>
              <div className="back">
                <strong> {data.id}</strong> {data.title}
              </div>
              {data.completed}
            </div>
          ))}
        </InfiniteScroll>
      </Div>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
            width: 50%;
          }
        `}
      </style>
    </>
  );
};

export default Content;

