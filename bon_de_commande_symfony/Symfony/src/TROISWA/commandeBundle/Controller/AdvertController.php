<?php

namespace TROISWA\commandeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use TROISWA\PlatformBundle\Entity\Advert;

class AdvertController extends Controller
{
    public function indexAction()
    {

    	$repository = $this->getDoctrine()->getManager()->getRepository('commandeBundle:Orders');
    	$listAdverts = $repository->findAll();
    	$content = $this->get('templating')->render('commandeBundle:Advert:index.html.twig', [ 'listAdverts'=> $listAdverts]);
    	var_dump($listAdverts);

        return new Response($content);
    }
     public function orderAction($id)
    {
	
    	$content = $this->get('templating')->render('commandeBundle:Advert:order.html.twig', ["id" => $id]);
    	

        return new Response($content);
    }
}
