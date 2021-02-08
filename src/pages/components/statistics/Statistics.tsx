import { Box, Card, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect } from 'react';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  BarChart,
  Bar,
} from 'recharts';
import { MONTHS } from '../../../core/constants/months';
import Layout from '../../../shared/components/layout/Layout';

import {
  IStatisticsReduxProps,
  IStatisticsReduxActions,
} from './StatisticsContainer';

type IStatisticsProps = IStatisticsReduxProps & IStatisticsReduxActions;

const Statistics = ({
  getStatisticsCategoriesReceiver,
  getStatisticsCategoriesSender,
  categoriesStatisticsReceiver,
  categoriesStatisticsSender,
  getStatisticsGiftsReceiver,
  getStatisticsGiftsSender,
  giftsStatisticsReceiver,
  giftsStatisticsSender,
  getStatisticsBudgetReceiver,
  getStatisticsBudgetSender,
  budgetStatisticsReceiver,
  budgetStatisticsSender,
}: IStatisticsProps): JSX.Element => {
  useEffect(() => {
    getStatisticsCategoriesReceiver('RECEIVED');
    getStatisticsCategoriesSender('SENT');
    getStatisticsGiftsReceiver('RECEIVED');
    getStatisticsGiftsSender('SENT');
    getStatisticsBudgetReceiver('RECEIVED');
    getStatisticsBudgetSender('SENT');
  }, [
    getStatisticsCategoriesReceiver,
    getStatisticsCategoriesSender,
    getStatisticsGiftsReceiver,
    getStatisticsGiftsSender,
    getStatisticsBudgetReceiver,
    getStatisticsBudgetSender,
  ]);

  if (
    categoriesStatisticsReceiver.loading ||
    categoriesStatisticsSender.loading ||
    giftsStatisticsReceiver.loading ||
    giftsStatisticsSender.loading ||
    budgetStatisticsReceiver.loading ||
    budgetStatisticsSender.loading
  )
    return (
      <Box p={4}>
        <Box my={2}>
          <Typography variant="h2">
            <Skeleton width="50%" />
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rect" width="100%" height={300} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rect" width="100%" height={300} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rect" width="100%" height={300} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rect" width="100%" height={300} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rect" width="100%" height={300} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rect" width="100%" height={300} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rect" width="100%" height={300} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rect" width="100%" height={300} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rect" width="100%" height={300} />
          </Grid>
        </Grid>
      </Box>
    );

  const getSenderCharts = () => {
    if (
      !categoriesStatisticsSender.data.length &&
      !giftsStatisticsSender.data.length &&
      !budgetStatisticsSender.data.length
    )
      return null;

    const { data: senderCategories } = categoriesStatisticsSender;
    const topSenderCategories = [
      senderCategories[0],
      senderCategories[1],
      senderCategories[2],
      senderCategories[3],
      senderCategories[4],
    ];

    const { data: senderGiftsMonth } = giftsStatisticsSender;
    const parsedSenderGiftsMonth = senderGiftsMonth.map((gift) => {
      const month = MONTHS.find((m) => m.number === Number(gift.month));

      return {
        mes: month?.name,
        regalos: gift.amount,
      };
    });

    const { data: senderBudgetMonth } = budgetStatisticsSender;
    const parsedSenderBudgetMonth = senderBudgetMonth.map((budget) => {
      const month = MONTHS.find((m) => m.number === Number(budget.month));

      return {
        mes: month?.name,
        gasto: budget.amount,
      };
    });

    return (
      <>
        <Box mt={4} mb={2}>
          <Typography variant="subtitle1">Lo que regalaste...</Typography>
        </Box>
        <Card>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box mt={2} textAlign="center">
                <Typography variant="subtitle1" style={{ color: '#999' }}>
                  Las 5 categorías que más regalaste
                </Typography>
              </Box>
              <ResponsiveContainer width="95%" height={300}>
                <PieChart>
                  <Pie
                    data={topSenderCategories}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    fill="#3483fa"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box mt={2} textAlign="center">
                <Typography variant="subtitle1" style={{ color: '#999' }}>
                  Regalos por mes(últimos 6 meses)
                </Typography>
              </Box>
              <ResponsiveContainer width="95%" height={300}>
                <BarChart data={parsedSenderGiftsMonth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="regalos" fill="#3483fa" />
                </BarChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box mt={2} textAlign="center">
                <Typography variant="subtitle1" style={{ color: '#999' }}>
                  Gastos por mes(últimos 6 meses)
                </Typography>
              </Box>
              <ResponsiveContainer width="95%" height={300}>
                <LineChart data={parsedSenderBudgetMonth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="gasto" stroke="#3483fa" />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </Card>
      </>
    );
  };

  const getReceiverCharts = () => {
    if (!categoriesStatisticsReceiver.data.length) return null;

    const { data: receiver } = categoriesStatisticsReceiver;
    const topReceiver = [
      receiver[0],
      receiver[1],
      receiver[2],
      receiver[3],
      receiver[4],
    ];

    const { data: receiverGiftsMonth } = giftsStatisticsReceiver;
    const parsedReceiverGiftsMonth = receiverGiftsMonth.map((gift) => {
      const month = MONTHS.find((m) => m.number === Number(gift.month));

      return {
        mes: month?.name,
        regalos: gift.amount,
      };
    });

    const { data: receiverBudgetMonth } = budgetStatisticsReceiver;
    const parsedReceiverBudgetMonth = receiverBudgetMonth.map((budget) => {
      const month = MONTHS.find((m) => m.number === Number(budget.month));

      return {
        mes: month?.name,
        gasto: budget.amount,
      };
    });

    return (
      <>
        <Box mt={4} mb={2}>
          <Typography variant="subtitle1">Lo que te regalaron...</Typography>
        </Box>
        <Card>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box mt={2} textAlign="center">
                <Typography variant="subtitle1" style={{ color: '#999' }}>
                  Las 5 categorías que más te regalaron
                </Typography>
              </Box>
              <ResponsiveContainer width="95%" height={300}>
                <PieChart>
                  <Pie
                    data={topReceiver}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    fill="#3483fa"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box mt={2} textAlign="center">
                <Typography variant="subtitle1" style={{ color: '#999' }}>
                  Regalos por mes(últimos 6 meses)
                </Typography>
              </Box>
              <ResponsiveContainer width="95%" height={300}>
                <BarChart data={parsedReceiverGiftsMonth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="regalos" fill="#3483fa" />
                </BarChart>
              </ResponsiveContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box mt={2} textAlign="center">
                <Typography variant="subtitle1" style={{ color: '#999' }}>
                  Gastos por mes(últimos 6 meses)
                </Typography>
              </Box>
              <ResponsiveContainer width="95%" height={300}>
                <LineChart data={parsedReceiverBudgetMonth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="gasto" stroke="#3483fa" />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </Card>
      </>
    );
  };

  return (
    <Layout>
      <Box p={4}>
        <Box my={2}>
          <Typography variant="h5">Mis estadísticas</Typography>
        </Box>
        {getSenderCharts()}
        {getReceiverCharts()}
      </Box>
    </Layout>
  );
};

export default Statistics;
