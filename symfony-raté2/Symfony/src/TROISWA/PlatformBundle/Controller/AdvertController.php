<?php

namespace TROISWA\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class AdvertController extends Controller
{
    public function indexAction($id, $name)
    {

    	
    	$url = $this->get('router')->generate(
            'troiswa_platform_homepage', ['id' => $id, 'name' => $name], UrlGeneratorInterface::ABSOLUTE_URL);
            
            var_dump($url);

        $tab = ['a', 'b', 'c'];
    	

    	$content = $this->get('templating')->render('TROISWAPlatformBundle:Advert:index.html.twig', ["nom" => $name, 'id' => $id, 'hh' => $tab]);


        return new Response($content);

    }
    public function homeAction()
    {
        $content = $this->get('templating')->render('TROISWAPlatformBundle:Home:home.html.twig');

        return new Response($content);
    }
    public function addAction()
    {
        
       $content = $this->get('templating')->render('TROISWAPlatformBundle:Home:home.html.twig');

        return new Response($content);
    }
    public function editAction($id)
    {
         $content = $this->get('templating')->render('TROISWAPlatformBundle:Edit:edit.html.twig', [ 'id' => $id ]);

        return new Response($content);
    }
    public function deleteAction($id)
    {
         $content = $this->get('templating')->render('TROISWAPlatformBundle:Delete:delete.html.twig', [ 'id' => $id ]);

        return new Response($content);
    }

}



?>