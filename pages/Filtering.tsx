import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
const Input = styled.input`
  width: 400px;
  height: 30px;
  margin-left: 35px;
`;
const H3 = styled.h3`
  margin-left: 30px;
`;
const Label = styled.label`
  margin-left: 30px;
  font-size: 13px;
`;
const Select = styled.select`
  width: 400px;
  height: 30px;
  margin-top: 20px;
  margin-left: 10px;
`;
const Button = styled.button`
  margin-left: 30px;
  background-color: #282727;
  margin-top: 30px;
  border: 1px solid transparent;
  border-radius: 3px;
  color: white;
  font-style: normal;
  font-size: 13px;
  width: 100px;
  height: 25px;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 700px;
`;
const Div = styled.div`
  border-radius: 0.25rem;
  /* margin-bottom: 30px; */
  height: 150px;
  width: 50%;
  margin-left: 100px;
  margin-top: 30px;
`;
const H5 = styled.h5`
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid black;
`;
const Span = styled.span`
  display: flex;
  justify-content: center;
  font-size: 13px;
  height: 30px;
  background-color: #bebebe;
`;
const Nav = styled.nav`
  display: block;
  box-sizing: border-box;
`;
const Li = styled.li`
  display: list-item;
  color: black;
  list-style: none;
  box-sizing: border-box;
  margin-left: 20px;
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
const Spanid = styled.span`
  display: flex;
  justify-content: center;
  font-size: 13px;
  height: -300px;
`;




const computedtodos = [
  {
    userId: 1,
    id: 1,
    Title: "delectus aut autem",
    completed: false,
    date: new Date("10-07-2021"),
  },
  {
    userId: 1,
    id: 2,
    Title: "quis ut nam facilis et officia qui",
    completed: true,
    date: new Date("10-10-2021"),
  },
  {
    userId: 1,
    id: 3,
    Title: "fugiat veniam minus",
    completed: false,
    date: new Date("07-10-2021"),
  },
  {
    userId: 1,
    id: 4,
    Title: "rerum veniam amet",
    completed: true,
    date: new Date("07-09-2021"),
  },
  {
    userId: 1,
    id: 5,
    Title: "vero rerum temporibus dolor",
    completed: false,
    date: new Date("10-22-2022"),
  },
  {
    userId: 2,
    id: 6,
    Title: "et doloremque nulla",
    completed: false,
    date: new Date("02-20-2022"),
  },
  {
    userId: 2,
    id: 7,
    Title: "ab voluptatum amet voluptas",
    completed: true,
    date: new Date("10-02-2022"),
  },
  {
    userId: 2,
    id: 8,
    Title: "veritatis pariatur delectus",
    completed: false,
    date: new Date("03-15-2022"),
  },
  {
    userId: 2,
    id: 9,
    Title: "laborum aut in quam",
    completed: true,
    date: new Date("05-25-2022"),
  },
  {
    userId: 2,
    id: 10,
    Title: "repudiandae totam in est sint facere fuga",
    completed: false,
    date: new Date("02-04-2022"),
  },
  {
    userId: 3,
    id: 11,
    Title: "sint sit aut vero",
    completed: false,
    date: new Date("06-15-2022"),
  },
  {
    userId: 3,
    id: 12,
    Title: "totam quia non",
    completed: true,
    date: new Date("08-13-2022"),
  },
  {
    userId: 3,
    id: 13,
    Title: "totam atque quo nesciunt",
    completed: false,
    date: new Date("09-19-2022"),
  },
  {
    userId: 3,
    id: 14,
    Title: "nam qui rerum fugiat accusamus",
    completed: true,
    date: new Date("10-05-2022"),
  },
  {
    userId: 3,
    id: 15,
    Title: "sit reprehenderit omnis quia",
    completed: false,
    date: new Date("12-25-2021"),
  },
  {
    userId: 4,
    id: 16,
    Title: "deleniti ea temporibus enim",
    completed: true,
    date: new Date("12-20-2021"),
  },
  {
    userId: 4,
    id: 17,
    Title: "aut velit saepe ullam",
    completed: false,
    date: new Date("02-11-2021"),
  },
  {
    userId: 4,
    id: 18,
    Title: "sequi dolorem sed",
    completed: true,
    date: new Date("11-13-2021"),
  },
  {
    userId: 4,
    id: 19,
    Title: "suscipit qui totam",
    completed: false,
    date: new Date("04-25-2021"),
  },
  {
    userId: 4,
    id: 20,
    Title: "et quia ad iste a",
    completed: false,
    date: new Date("05-18-2021"),
  },
];

export default function App() {
  const [todos, setTodos] = useState<
    Array<{
      id: number;
      userId: number;
      date: Date;
      Title: string;
      completed: boolean;
    }>
  >();

  const [searchTerm, setSearchTerm] = useState("");
  const [isAtoZ, SetAtoZ] = useState(false);
  const [isZtoA, SetZtoA] = useState(false);
  const [Asc, SetAsc] = useState(false);
  const [Dsc, SetDsc] = useState(false);

  const [filterCompleted, setFilterCompleted] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalTodos, setTotalTodos] = useState(0);
  const todosPerPage = 5;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const todosData = useMemo(() => {
    let computedTodos = computedtodos;

    if (searchTerm) {
      computedTodos = computedTodos.filter((todo) =>
        todo.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCompleted === "true") {
      computedTodos = computedTodos.filter(
        (todo) => filterCompleted === "true" && todo.completed === true
      );
    }

    if (filterCompleted === "false") {
      computedTodos = computedTodos.filter(
        (todo) => filterCompleted === "false" && todo.completed === false
      );
    }

    setTotalTodos(computedTodos.length);

    //Current Page slice
    var slicedData = computedTodos.slice(
      (currentPage - 1) * todosPerPage,
      (currentPage - 1) * todosPerPage + todosPerPage
    );
    if (isAtoZ) {
      slicedData.sort((a, b) => (a.Title > b.Title ? 1 : -1));
    }
    if (isZtoA) {
      slicedData.sort((a, b) => (a.Title < b.Title ? 1 : -1));
    }
    if (Asc) {
      slicedData.sort(function (a, b) {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);
        if (date1.getTime() < date2.getTime()) {
          return -1;
        }
        if (date1.getTime() > date2.getTime()) {
          return 1;
        }
        return 0;
      });
    }
    if (Dsc) {
      slicedData.sort(function (a, b) {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);
        if (date1.getTime() < date2.getTime()) {
          return 1;
        }
        if (date1.getTime() > date2.getTime()) {
          return -1;
        }
        return 0;
      });
    }
    return slicedData;
  }, [currentPage, searchTerm, filterCompleted, isAtoZ, isZtoA, Asc, Dsc]);
  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const resetFilter = () => {
    setSearchTerm("");
    setFilterCompleted("");
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <H3>Filters</H3>
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
          }}
        />
      </div>
      <div className="mb-3">
        <Label htmlFor="search" className="form-label">
          Completed
        </Label>
        <Select
          className="form-select"
          value={filterCompleted}
          onChange={(e) => {
            setFilterCompleted(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option defaultValue=""></option>
          <option value="true">true</option>
          <option value="false">false</option>
        </Select>
      </div>
      <div className="mb-3">
        <Button
          type="button"
          onClick={() => {
            SetAtoZ(true);
            SetZtoA(false);
          }}
        >
          ASC Title
        </Button>
        <Button
          type="button"
          onClick={() => {
            SetZtoA(true);
            SetAtoZ(false);
          }}
        >
          DSC Title
        </Button>
        <Button
          type="button"
          onClick={() => {
            SetAsc(true);
            SetDsc(false);
          }}
        >
          ASC Date
        </Button>
        <Button
          type="button"
          onClick={() => {
            SetDsc(true);
            SetAsc(false);
          }}
        >
          DSC Date
        </Button>
        <Buttonreset
          type="button"
          className="btn btn-danger btn-sm"
          onClick={resetFilter}
        >
          Reset Filters
        </Buttonreset>
      </div>

  {todosData.map((todo) => {
        return (
          <Div key={todo.id} >
            <H5 >
              <div >
                <Spanid className="id">{`#${todo.id}`}</Spanid>
              </div>
            </H5>
            
                <div >
                  <Span>{`Title: ${todo.Title}`}</Span>
                  <Span>{`Completed: ${todo.completed}`}</Span>
                  <Span>{`date: ${todo.date.toLocaleDateString()}`}</Span>
               
            </div>
          </Div>
        );
      })}
        <Nav>
        <Ul className="pagination">
          {pageNumbers.map((number) => (
            <Li key={number} >
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </Li>
          ))}
        </Ul>
      </Nav>
    </div>
  );
}
