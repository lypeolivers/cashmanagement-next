'use client'
import { useState } from 'react'
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import data from '@/database/database.json'

import { iDebt } from '@/interfaces/debt';

import ModalDebt from '@/components/modal-debt';

export default function MonthByMonth() {

    const [database, setDatabase] = useState(data.data || []);
    const columns: ColumnsType<iDebt> = [
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
            render: (text) => <a>{text}</a>,
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



    return (
        <div>
            <h1>Month by Month</h1>
            <Table columns={columns} dataSource={database} />
            <div><ModalDebt database={database} setDatabase={setDatabase} /></div>
        </div>

    )
}