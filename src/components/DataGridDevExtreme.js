import React from "react";
import DataGrid, {
  GroupPanel,
  Paging,
  SearchPanel,
  Export,
  Grouping,
  ColumnChooser,
  ColumnFixing,
  Scrolling,
} from "devextreme-react/data-grid";

export default function DataGridDevExtreme(props) {
  return (
    <DataGrid
      dataSource={props.data}
      allowColumnReordering={true}
      showBorders={true}
      allowColumnResizing={true}
      columnAutoWidth
      height={"40rem"}
    >
      <Scrolling
        useNative={true}
        scrollByContent={true}
        scrollByThumb={true}
        showScrollbar="always"
      />
      <GroupPanel visible={true} />
      <Grouping autoExpandAll={false} />
      <SearchPanel visible={true} height={10} />
      <Paging defaultPageSize={20} />
      <Export enabled={true} />
      <ColumnChooser enabled={true} />
      <ColumnFixing enabled={true} />
    </DataGrid>
  );
}
