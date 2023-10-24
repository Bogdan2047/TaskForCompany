import React, { useState } from "react";
import { TableComponent } from "../../components/table";
import { useGetDataQuery } from "../../slice/query/query";
import { Button } from "antd";

export const Home = () => {
  const [offset, setOffset] = useState(0);
  const { data, isLoading } = useGetDataQuery({ limit: 10, offset });

  const handleNextPage = () => {
    if (data && data.next) {
      setOffset(offset + 10);
    }
  };

  const handlePrevPage = () => {
    if (offset === 0) {
      return;
    }
    setOffset(offset - 10);
  };

  const currentPage = offset / 10 + 1;

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center align-center">
          <span>Loading...</span>
        </div>
      ) : data ? (
        <div>
          <div>
            <TableComponent data={data.results} />
          </div>
          <div className="py-[20px] flex flex-row justify-between w-[300px] pl-[10px]">
            <Button
              type="primary"
              className="bg-blue-400"
              onClick={handlePrevPage}
            >
              Попередня
            </Button>
            <span className="text-xl">{currentPage}</span>
            <Button
              type="primary"
              className="bg-blue-400"
              onClick={handleNextPage}
            >
              Наступна
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center align-center">
          <h1>Not Connection</h1>
        </div>
      )}
    </div>
  );
};
