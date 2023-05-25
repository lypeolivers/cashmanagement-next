'use client'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export default function MonthByMonth() {
    interface DataType {
        id: string;
        name: string;
        type: string;
        value: string;
        tags: string[];
    }
    
    const columns: ColumnsType<DataType> = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>#{text}</a>,
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'value',
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
    ];
    const data: DataType[] = [{
        id: '1',
        name: 'Luz',
        type: 'Saída',
        value: '139,00',
        tags: ['nice', 'developer'],
    },
    {
        id: '2',
        name: 'Aluguel',
        type: 'Saída',
        value: '200,00',
        tags: ['loser'],
    },
    {
        id: '3',
        name: 'Condomínio',
        type: 'Saída',
        value: '50,00',
        tags: ['cool', 'teacher'],
    },]

    return (
        <div>
            <h1>Month by Month</h1>
            <Table columns={columns} dataSource={data} />
        </div>

    )
}