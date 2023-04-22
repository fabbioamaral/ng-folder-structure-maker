import { Component } from '@angular/core';
import { NodeModel } from './models/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stubFolderStructure: NodeModel[] = [
    {
      type: 'folder',
      name: 'my_first_folder',
      children: [
        {
          type: 'file',
          name: 'first_doc.html',
          id: '1_1',
          isRoot: false,
        },
        {
          type: 'file',
          name: 'second_doc.jpeg',
          id: '1_2',
          isRoot: false,
        },
        {
          type: 'folder',
          name: 'my_second_folder',
          children: [
            {
              type: 'file',
              name: 'file_in_second_folder.txt',
              id: '1_3_1',
              isRoot: false,
            },
            {
              type: 'folder',
              name: 'another_folder',
              children: [
                {
                  type: 'file',
                  name: 'random.txt',
                  id: '1_3_2_1',
                  isRoot: false,
                },
                {
                  type: 'file',
                  name: 'another_file.png',
                  id: '1_3_2_2',
                  isRoot: false,
                },
                {
                  type: 'file',
                  name: 'helloworld.html',
                  id: '1_3_2_3',
                  isRoot: false,
                },
              ],
              id: '1_3_2',
              isRoot: false,
            },
          ],
          id: '1_3',
          isRoot: false,
        },
      ],
      id: '1',
      isRoot: true,
    },
  ];
}
