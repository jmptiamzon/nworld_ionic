import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleCharts } from 'google-charts';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: number;
  name: string;
  country: string;
  left: number;
  right: number;
  sponsor: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'country', 'left', 'right', 'sponsor'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    const users = [
      {
        id: 1,
        name: '(BG014759) June Paolo Nolasco',
        country: 'flag-icon flag-icon-ph',
        left: 77882,
        right: 4114,
        sponsor: '(BG883990) NWorld, NWorld .'
      },
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.reset();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  reset() {
    GoogleCharts.load(this.drawChart, {
      'packages': ['orgchart']
    });
  }

  drawChart() {
    const data = new GoogleCharts.api.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Manager');
    const actualData = [
      [{'v': '1', 'f': '1'}, ''],
      [{'v': '2', 'f': '2'}, '1'],
      [{'v': '3', 'f': '3'}, '1'],
      [{'v': '4', 'f': '4'}, '2'],
      [{'v': '5', 'f': '5'}, '2'],
      [{'v': '6', 'f': '6'}, '3'],
      [{'v': '7', 'f': '7'}, '3'],
      [{'v': '8', 'f': '8'}, '4'],
      [{'v': '9', 'f': '9'}, '4'],
      [{'v': '10', 'f': '10'}, '5'],
      [{'v': '11', 'f': '11'}, '5'],
      [{'v': '12', 'f': '12'}, '6'],
      [{'v': '13', 'f': '13'}, '6'],
      [{'v': '14', 'f': '14'}, '7'],
      [{'v': '15', 'f': '15'}, '7'],
      [{'v': '16', 'f': '16'}, '8'],
      [{'v': '17', 'f': '17'}, '8'],
      [{'v': '18', 'f': '18'}, '9'],
      [{'v': '19', 'f': '19'}, '9'],
      [{'v': '20', 'f': '20'}, '10'],
      [{'v': '21', 'f': '21'}, '10'],
      [{'v': '22', 'f': '22'}, '11'],
      [{'v': '23', 'f': '23'}, '11'],
      [{'v': '24', 'f': '24'}, '12'],
      [{'v': '25', 'f': '25'}, '12'],
      [{'v': '26', 'f': '26'}, '13'],
      [{'v': '27', 'f': '27'}, '13'],
      [{'v': '28', 'f': '28'}, '14'],
      [{'v': '29', 'f': '29'}, '14'],
      [{'v': '30', 'f': '30'}, '15'],
      [{'v': '31', 'f': '31'}, '15']
    ];

    const actualStyle = [
      'background: #F0E68C; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #FFFFFF; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #FFFFFF; border: 0px;',
      'background: #FFFFFF; border: 0px;',
      'background: #F0E68C; border: 0px;', // yellow
      'background: #F0E68C; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #0045DB; border: 0px;', // blue
      'background: #0045DB; border: 0px;',
      'background: #0045DB; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #FFFFFF; border: 0px;',
      'background: #FFFFFF; border: 0px;',
      'background: #FFFFFF; border: 0px;',
      'background: #FFFFFF; border: 0px;',
      'background: #FFFFFF; border: 0px;',
      'background: #0045DB; border: 0px;',
      'background: #FFFFFF; border: 0px;',
      'background: #F0E68C; border: 0px;',
      'background: #FF0000; border: 0px;', // red
      'background: #FF0000; border: 0px;',
      'background: #FFFFFF; border: 0px;',
      'background: #0045DB; border: 0px;'
    ];
    // data.addColumn('string', 'ToolTip');

    data.addRows([
      [{'v': '1', 'f': '1'}, ''],
      [{'v': '2', 'f': '2'}, '1'],
      [{'v': '3', 'f': '3'}, '1'],
      [{'v': '4', 'f': '4'}, '2'],
      [{'v': '5', 'f': '5'}, '2'],
      [{'v': '6', 'f': '6'}, '3'],
      [{'v': '7', 'f': '7'}, '3']
    ]);

    data.setRowProperty(0, 'style', 'background: #F0E68C; border: 0px;');
    data.setRowProperty(1, 'style', 'background: #F0E68C; border: 0px;');
    data.setRowProperty(2, 'style', 'background: #F0E68C; border: 0px;');
    data.setRowProperty(3, 'style', 'background: #F0E68C; border: 0px;');
    data.setRowProperty(4, 'style', 'background: #FFFFFF; border: 0px;');
    data.setRowProperty(5, 'style', 'background: #F0E68C; border: 0px;');
    data.setRowProperty(6, 'style', 'background: #F0E68C; border: 0px;');

    let orgChart = new GoogleCharts.api.visualization.OrgChart(document.getElementById('org_container'));
    orgChart.draw(data, { 'allowHtml': true, 'allowCollapse': true });

    GoogleCharts.api.visualization.events.addListener(orgChart, 'select', () => {
      const selection = orgChart.getSelection();
      const newChart = new GoogleCharts.api.visualization.DataTable();
      const temp = [];
      const style = [];
      let tempSize = 0;
      let ctr = 0;
      let colorCtr = 0;

      if (selection.length > 0) {
        // data.wg[selection[0].row].c[1].v
        // console.log(data.wg[selection[0].row - 1]);  element.p.style

        while (true) {
          tempSize = temp.length;

          // GET HEAD NODE
          if (temp.length === 0) {
            actualData.forEach((element: any) => {
              if (selection[0].row === ctr) {
                temp.push(
                  [
                    {'v': element[0].v, 'f': element[0].f},
                    ''
                  ]
                );

                style.push(
                  actualStyle[ctr]
                );
              }

              ctr++;
            });
          }
          ctr = 0;

          // BREAK IF NO HEAD
          if (temp.length === tempSize) {
            break;
          }

          // GET CHILDREN
          while (true) {
            tempSize = temp.length;

            actualData.forEach((elem: any) => {
              // console.log(elem.c[0].v + " " + elem.c[1].v + " " + temp[ctr][0].v);
              if (elem[1] === temp[ctr][0].v) {
                temp.push(
                  [
                    {'v': elem[0].v, 'f': elem[0].f},
                    elem[1]
                  ]
                );

                style.push(
                  actualStyle[colorCtr]
                );
              }

              colorCtr++;
            });
            colorCtr = 0;
            ctr++;

            if (temp.length === tempSize) {
              break;
            }
          }

          break;
        }

        // DRAW CHART
        if (temp.length !== 0) {
          newChart.addColumn('string', 'Name');
          newChart.addColumn('string', 'Manager');
          // console.log(temp);
          ctr = 0;
          newChart.addRows(temp);

          style.forEach((element: any) => {
            newChart.setRowProperty(ctr, 'style', element);
            ctr++;
          });

          orgChart = new GoogleCharts.api.visualization.OrgChart(document.getElementById('org_container'));
          orgChart.draw(newChart, { 'allowHtml': true });
        }

      }
    });
  }




}

/** Builds and returns a new User. */
/* function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
} */
